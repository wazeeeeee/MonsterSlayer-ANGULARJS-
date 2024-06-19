import { Injectable } from '@angular/core';

interface Entity {
  max: number;
  current: number;
  min: number;
}

@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  playerHealth: Entity = {
    max: 100,
    current: 100,
    min: 0,
  };
  
  monsterhealth: Entity = {
    max: 100,
    current: 100,
    min: 0,
  };

  get playerMaxHealth(): number{
    return this.playerHealth.max;
  }

  get playerCurrentHealth(): number{
    return this.playerHealth.current;
  }

  get playerMinHealth(): number{
    return this.playerHealth.min;
  }

  get playerHealthPercent(): number{
    return (this.playerHealth.current / this.playerHealth.max) * 100;
  }

  UpdateCurrentPlayerHealth(newHealth: number) {
    this.playerHealth.current += newHealth;
  }

  get monsterMaxHealth(): number{
    return this.monsterhealth.max;
  }

  get monsterCurrentHealth(): number{
    return this.monsterhealth.current;
  }

  get monsterMinHealth(): number{
    return this.playerHealth.min;
  }

  get monsterHealthPercent(): number{
    return (this.monsterhealth.current / this.monsterhealth.max ) * 100;
  }
  
  UpdateCurrentMonsterHealth(newHealth: number) {
    this.monsterhealth.current += newHealth;
  }

  attack(){
    const damage = Math.floor(Math.random() * 5) + 1
    const heroMultiplactor = 2;
    this.monsterhealth.current -= damage
    this.playerHealth.current -= damage * heroMultiplactor;
  }

  attackSpecial(){
    const specialDamage = Math.floor(Math.random() * 6) + 1
    const monsterDamage = 2;
    this.monsterhealth.current -= specialDamage * monsterDamage;
    this.playerHealth.current -= specialDamage;
  }

  heal(){
    const healAmout = Math.floor(Math.random() * 20 ) + 10;
    this.playerHealth.current += healAmout;
  }

  resetHealth(){
    this.monsterhealth.current = this.monsterMaxHealth;
    this.playerHealth.current = this.playerMaxHealth;
  }
}
