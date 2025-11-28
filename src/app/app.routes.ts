import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ListarComponent } from './pages/listar/listar.component';
import { BuscarAtivosComponent } from './pages/buscar-ativos/buscar-ativos.component';
import { BuscarInativasComponent } from './pages/buscar-inativas/buscar-inativas.component';
import { BuscarConcluidosComponent } from './pages/buscar-concluidos/buscar-concluidos.component';
import { BuscarDesenvolvedorComponent } from './pages/buscar-desenvolvedor/buscar-desenvolvedor.component';
import { EmpresaIbmComponent } from './pages/empresa-ibm/empresa-ibm.component';
import { BuscarEnfermeiraComponent } from './pages/buscar-enfermeira/buscar-enfermeira.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'listar', component: ListarComponent },
    { path: 'ativos', component: BuscarAtivosComponent },
    { path: 'inativos', component: BuscarInativasComponent },
    { path: 'conclusao', component: BuscarConcluidosComponent },
    { path: 'desenvolvedores', component: BuscarDesenvolvedorComponent },
    { path: 'empresa', component: EmpresaIbmComponent },
    { path: 'enfermeira', component: BuscarEnfermeiraComponent },
];
