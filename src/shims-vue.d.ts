import type {UnwrapRef, VNode} from 'vue'
import {RouteLocationNormalized, RouterLink, RouterView, useLink} from 'vue-router'
import {defineComponent} from "vue";

declare module '*.md' {
    const Component: ReturnType<typeof defineComponent>
    export default Component
}

declare namespace vue {
    interface GlobalComponents {
        RouterLink: typeof RouterLink & {
            __VLS_slots: {
                default: UnwrapRef<ReturnType<typeof useLink>>
            }
        },
        RouterView: typeof RouterView & {
            __VLS_slots: {
                default: {
                    Component: VNode,
                    route: RouteLocationNormalized & { href: string }
                }
            }
        }
    }
}

