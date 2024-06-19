import { Component, inject } from '@angular/core';
import { PlayerService } from '../../Service/player.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  playerService = inject(PlayerService);

  attack(){
      this.playerService.attack();
      this.gameOver(); 
  }

  attackSpecial(){
      this.playerService.attackSpecial()
      this.gameOver();
  }

  heal(){
    if(this.playerService.playerHealth.current >= this.playerService.playerHealth.max){
      this.playerService.UpdateCurrentPlayerHealth(0);
    }else if(this.playerService.playerHealth.current < this.playerService.playerHealth.max){
      this.playerService.heal()
    }
  }

  gameOver(){
    if(this.playerService.playerHealth.current <= 0){
      this.playerService.resetHealth()
      alert('You lost!');
    }
    if(this.playerService.monsterhealth.current <= 0){
      this.playerService.resetHealth();
      alert('You won!');
    }
  }

  giveUp(){
    alert('You lost!');
    this.playerService.resetHealth();
  }
}
