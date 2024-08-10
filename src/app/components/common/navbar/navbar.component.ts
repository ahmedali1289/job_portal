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
  // Navbar Sticky
  isSticky: boolean = false;
  authenticationForm: FormGroup;
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
  currentInnerTab = 'innerTab1';
  switchInnerTab(event: MouseEvent, tab: string) {
    event.preventDefault();
    this.currentInnerTab = tab;
  }

  // Modal Popup
  isOpen = false;
  async openPopup() {
    await this.createForm();
    this.isOpen = true;
  }
  createForm(): void {
    this.authenticationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    this.store.dispatch(addUserData({ user: this.authenticationForm.value }));
    this.isOpen = false;
  }
  get email() {
    return this.authenticationForm.get('email');
  }

  get password() {
    return this.authenticationForm.get('password');
  }
}
