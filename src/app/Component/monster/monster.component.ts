import { Component, inject } from '@angular/core';
import { PlayerService } from '../../Service/player.service';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent {
  playerService = inject(PlayerService);

}
