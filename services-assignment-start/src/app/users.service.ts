import {Injectable} from "@angular/core";
import {CounterService} from "./counter.service";

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  constructor(private counterService: CounterService) {}

  activateUser(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.increaseCounter();
  }

  deactivateUser (id: number) {
      this.inactiveUsers.push(this.activateUser[id]);
      this.activeUsers.splice(id, 1);
      this.counterService.increaseCounter();
  }

}
