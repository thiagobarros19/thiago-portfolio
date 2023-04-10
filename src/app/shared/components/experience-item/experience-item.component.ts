import { Component, Input } from '@angular/core';
import * as dayjs from 'dayjs';
import { Experience } from 'src/app/model/application';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent {
  @Input()
  public experience: Experience;

  public dateDiff(dateInit: string, dateEnd: string): string {
    const date1 = dayjs(dateEnd)
    const date2 = dayjs(dateInit)

    const years = Math.floor(date1.diff(date2, 'month') / 12);
    const months = date1.diff(date2, 'month') % 12;
    return `${years} years ${months} months`;
  }
}
