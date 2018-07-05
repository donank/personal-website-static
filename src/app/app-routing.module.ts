import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { SocialComponent } from './social/social.component';
import { Error404Component } from './error404/error404.component';

const routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'social',
        component: SocialComponent
    },
    { 
        path: '**', 
        component: Error404Component
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