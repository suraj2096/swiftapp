import { Component, signal } from '@angular/core';

interface CabOption {
  id: number;
  name: string;
  type: 'Cab' | 'SUV' | 'Sedan' | 'Luxury';
  category: 'cab' | 'luxury';
  seats: number;
  eta: string;
  price: string;
  fareNote: string;
  tags: string[];
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('SwiftRide Demo');

  protected readonly showLoginModal = signal(false);
  protected readonly showConfirmation = signal(false);
  protected readonly activeRole = signal<'consumer' | 'driver' | 'partner' | 'guest'>('guest');
  protected readonly activeTripType = signal<'local' | 'oneWay' | 'roundTrip' | 'rental'>('local');
  protected readonly showResults = signal(false);
  protected readonly selectedCategory = signal<'cab' | 'luxury'>('cab');
  protected readonly cabOptions = signal<CabOption[]>([
    {
      id: 1,
      name: 'Hatchback Saver',
      type: 'Cab',
      category: 'cab',
      seats: 4,
      eta: '3 min',
      price: '₹ 11/km',
      fareNote: 'Approx. ₹ 300 for 20 km',
      tags: ['Best for city', 'AC • UPI'],
    },
    {
      id: 2,
      name: 'Sedan Comfort',
      type: 'Sedan',
      category: 'cab',
      seats: 4,
      eta: '5 min',
      price: '₹ 13/km',
      fareNote: 'Approx. ₹ 360 for 20 km',
      tags: ['Extra legroom', 'Luggage friendly'],
    },
    {
      id: 3,
      name: 'SUV XL',
      type: 'SUV',
      category: 'cab',
      seats: 6,
      eta: '7 min',
      price: '₹ 16/km',
      fareNote: 'Approx. ₹ 450 for 20 km',
      tags: ['Family trips', 'Airport ready'],
    },
    {
      id: 4,
      name: 'BMW 5 Series',
      type: 'Luxury',
      category: 'luxury',
      seats: 4,
      eta: '15 min',
      price: '₹ 80/km',
      fareNote: 'From ₹ 2,400 for 30 km / 4 hrs',
      tags: ['Wedding • VIP', 'Chauffeur driven'],
    },
    {
      id: 5,
      name: 'Mercedes E-Class',
      type: 'Luxury',
      category: 'luxury',
      seats: 4,
      eta: '18 min',
      price: '₹ 90/km',
      fareNote: 'From ₹ 2,800 for 30 km / 4 hrs',
      tags: ['Corporate', 'Airport transfer'],
    },
  ]);
  protected readonly selectedCab = signal<CabOption | null>(null);

  openLogin(role: 'consumer' | 'driver' | 'partner' | 'guest' = 'guest') {
    this.activeRole.set(role);
    this.showLoginModal.set(true);
  }

  closeLogin() {
    this.showLoginModal.set(false);
  }

  simulateLogin() {
    this.showLoginModal.set(false);
  }

  submitBookingDemo() {
    this.showResults.set(true);
    this.selectedCab.set(null);
    const resultsSection = document.getElementById('results');
    resultsSection?.scrollIntoView({ behavior: 'smooth' });
  }

  setTripType(type: 'local' | 'oneWay' | 'roundTrip' | 'rental') {
    this.activeTripType.set(type);
  }

  changeCategory(category: 'cab' | 'luxury') {
    this.selectedCategory.set(category);
  }

  selectCab(option: CabOption) {
    this.selectedCab.set(option);
    this.showConfirmation.set(true);
    setTimeout(() => this.showConfirmation.set(false), 4000);
  }
}
