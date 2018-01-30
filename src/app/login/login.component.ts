import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../common/authentication.service';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder,
        private authService: AuthenticationService,
        private router: Router) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const val = this.form.value;

        if (val.email && val.password) {
            this.authService.login(val.email, val.password)
                .subscribe(
                () => {
                    console.log('User is logged in');
                    this.router.navigateByUrl('/');
                }
                );
        }
    }
}
