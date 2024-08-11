import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgClass, NgOptimizedImage } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/ngrx/data.reducer';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { addUserData } from 'src/app/ngrx/data.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    AsyncPipe,
    NgOptimizedImage,
    RouterLinkActive,
    ReactiveFormsModule,
  ],
})
export class NavbarComponent {
  isSticky: boolean = false;
  loginForm: FormGroup;
  signUpForm: FormGroup;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition >= 50) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
  user$ = this.store.select(selectUser);
  userDetails: any = null;
  constructor(
    public router: Router,
    private store: Store,
    private fb: FormBuilder
  ) {
    this.user$.subscribe((user: any) => {
      console.log(user);
      if (user?.name) {
        this.userDetails = user;
      }
    });
  }

  classApplied = false;
  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  // Tabs 1
  currentTab = 'tab1';
  switchTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentTab = tab;
  }

  // Tabs 2
  currentInnerTab = 'Candidate';
  switchInnerTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentInnerTab = tab;
    this.signUpForm.get('role').setValue(tab);
  }

  // Modal Popup
  isOpen = false;
  async openPopup() {
    await this.createForm();
    this.isOpen = true;
  }
  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.signUpForm = this.fb.group({
      role: [this.currentInnerTab, [Validators.required]],
      fName: ['', [Validators.required]],
      lName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.currentTab == 'tab1') {
      console.log('login');
    } else {
      console.log('signup form');
    }
    this.store.dispatch(addUserData({ user: this.loginForm.value }));
    this.isOpen = false;
  }
}
