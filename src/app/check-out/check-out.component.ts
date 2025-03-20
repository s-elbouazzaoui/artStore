import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../Product/Service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent implements OnInit{


  private toast = inject(ToastrService)
  private fb = inject(FormBuilder)
  private prodService = inject(ProductService)
  private router = inject(Router)

  formvalid : FormGroup = new FormGroup({});





  validate(){
    if(this.formvalid.valid){
      

    this.toast.success("Checkout validated successfullly","",{
      progressBar:true,
      progressAnimation:'increasing',
      timeOut:1000,
      positionClass:'sucess'
    })
    this.prodService.clearCart();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
    
    

  }
  else{
    this.toast.warning("PLease fill all the fields to validate the checkout","",{
      positionClass:'sucess',
      timeOut:1500
    })
  }
}

  ngOnInit(): void {

    this.formvalid = this.fb.group({
      num:['',Validators.required],
      name:['',Validators.required],
      type:['',Validators.required],
      date:['',Validators.required],
      cvv:['',Validators.required]
    })

  }

}
