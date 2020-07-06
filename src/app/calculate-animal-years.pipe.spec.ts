import { CalculateAnimalYearsPipe } from './calculate-animal-years.pipe';

describe('CalculateAnimalYearsPipe', () => {
  it('create an instance', () => {
    const pipe = new CalculateAnimalYearsPipe();
    expect(pipe).toBeTruthy();
  });
});
