import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/funcionario';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
   
    formFuncionario: FormGroup;

    constructor(
    private fb: FormBuilder,
    private funcionarioService: FuncionarioService
  ) {
    // Inicializa o formulário com validações
    this.formFuncionario = this.fb.group({
      nomeFuncionario: ['', Validators.required],
      emailFuncionario: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      celular: [''],
      emailComporativo: [''],
      funcao: [''],
      datainicio: ['', Validators.required],
      situacaoEmpresa: [''],
      dateTermino: [''],
      salario: [0, Validators.required],
      empresa: [''],
      situacao: ['']
    });
  }

   salvar() {
    if (this.formFuncionario.valid) {
      const funcionario: Funcionario = this.formFuncionario.value;

      this.funcionarioService.adicionarFuncionario(funcionario)
        .subscribe({
          next: res => {
            console.log('Funcionário cadastrado com sucesso!', res);
            this.formFuncionario.reset(); // limpa o formulário
          },
          error: err => {
            console.error('Erro ao cadastrar funcionário', err);
          }
        });
    } else {
      console.warn('Formulário inválido, verifique os campos.');
    }
  }

}
