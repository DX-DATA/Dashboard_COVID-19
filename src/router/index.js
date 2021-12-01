import { createRouter, createWebHistory } from "vue-router";
import Main from '../components/Home'
import Vaccine from '../components/vaccine/Main'
import Crane from '../components/crane/CraneMain'
import Elecar from '../components/elecar/ElecarMain'
const routes = [
    {
        path : '/',
        name : 'Main',
        component : Main
    },
    {
        path : '/vaccine',
        name : 'Vaccine',
        component : Vaccine
    },
    {
        path : '/crane',
        name : 'crane',
        component : Crane
    },
    {
        path : '/elecar',
        name : 'elecar',
        component : Elecar
    },
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
});

export default router;