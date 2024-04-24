import { createRouter,createWebHashHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue';
import ContentArea from "@/components/ContentArea.vue";
import AtcDetail from "@/components/AtcDetail.vue";
import NewNote from "@/components/NewNote.vue";
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:ContentArea,
        },
        {
            path:'/content',
            component:ContentArea,
        },
        {
            path:'/project',
            component:ContentArea,
        },
        {
            path:'/maker',
            component:ContentArea,
        },
        {
            path:'/detail',
            component:AtcDetail
        },
        {
            path:'/newnote',
            component:NewNote
        }
    ]
})
export default router;
