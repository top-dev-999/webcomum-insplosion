// src/utils/lazy-load-component.js
import AppSkeletonBox from "@/components/AppSketelonBox";

const defaultOptions = {
    loading: AppSkeletonBox,
};

export default function lazyLoadComponent({componentFactory}) {
    let resolveComponent;

    return () => ({
        // We return a promise to resolve a
        // component eventually.
        component: new Promise((resolve) => {
            resolveComponent = resolve;
        }),
        loading: {
            mounted() {
                // We immediately load the component if
                // `IntersectionObserver` is not supported.
                if (!('IntersectionObserver' in window)) {
                    componentFactory().then(resolveComponent);
                    return;
                }
                const observer = new IntersectionObserver((entries) => {
                    // Use `intersectionRatio` because of Edge 15's
                    // lack of support for `isIntersecting`.
                    // See: https://github.com/w3c/IntersectionObserver/issues/211
                    if (entries[0].intersectionRatio <= 0) return;

                    // Cleanup the observer when it's not
                    // needed anymore.
                    observer.unobserve(this.$el);
                    // The `componentFactory()` resolves
                    // to the result of a dynamic `import()`
                    // which is passed to the `resolveComponent()`
                    // function.
                    componentFactory().then(resolveComponent);
                });
                // We observe the root `$el` of the
                // mounted loading component to detect
                // when it becomes visible.
                observer.observe(this.$el);
            },
            // Here we render the the component passed
            // to this function via the `loading` parameter.
            render(createElement) {
                return createElement(defaultOptions.loading);
            },
        },
    });
}