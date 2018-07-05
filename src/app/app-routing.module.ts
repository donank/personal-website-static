import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { SocialComponent } from './social/social.component';
import { InterceptorComponent } from './interceptor/interceptor.component';

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
        component: InterceptorComponent
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