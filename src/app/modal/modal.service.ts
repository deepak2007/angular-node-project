import { ComponentFactoryResolver, Injectable, ViewContainerRef } from "@angular/core";
import { ModalComponent } from "./modal.component";

@Injectable()
export class ModalService {
    private rootViewContainer: ViewContainerRef;
    constructor(private factoryResolver: ComponentFactoryResolver) {
        this.factoryResolver = factoryResolver;
    }
    setRootViewContainerRef(viewContainerRef:any) {
        this.rootViewContainer = viewContainerRef;
    }
    addDynamicComponent(foodId: string, foodName: string, foodPrice: any, productDetails: any) {
        const factory = this.factoryResolver.resolveComponentFactory(ModalComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        component.instance.foodId = foodId;
        component.instance.foodName = foodName;
        component.instance.foodPrice = foodPrice;
        component.instance.productDetails = productDetails;
        // Subscribe to the closeModal event and destroy the component
        component.instance.closeModal.subscribe(() => this.removeDynamicComponent(component));
        this.rootViewContainer.insert(component.hostView);
    }
    removeDynamicComponent(component:any) {
        component.destroy();
    }
}
