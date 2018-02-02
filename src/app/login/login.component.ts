import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(private route: ActivatedRoute,
        private authService: AuthenticationService,
        private router: Router) {
    }

    ngOnInit() {
        this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .then(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                console.error(error);
                this.loading = false;
            });
    }
}
