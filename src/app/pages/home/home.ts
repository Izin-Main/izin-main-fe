import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Circle, Calendar, Users, Heart, Instagram, Mail, MessageCircle, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly Circle = Circle;
  readonly Calendar = Calendar;
  readonly Users = Users;
  readonly Heart = Heart;
  readonly Instagram = Instagram;
  readonly Mail = Mail;
  readonly MessageCircle = MessageCircle;
}
