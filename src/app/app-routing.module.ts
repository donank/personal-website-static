import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes = [
    {
        path: 'about',
        loadChildren:'./about/about.module#AboutModule'
    },
    {
        path: 'projects',
        loadChildren:'./about/projects.module#ProjectsModule'
    },
    {
        path: 'blog',
        loadChildren:'./about/blog.module#BlogModule'
    },
    {
        path: 'social',
        loadChildren:'./about/social.module#SocialModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}