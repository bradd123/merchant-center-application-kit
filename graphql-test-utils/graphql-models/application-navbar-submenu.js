import { Factory } from 'rosie';
import faker from 'faker';

const ApplicationNavbarSubmenu = new Factory()
  .sequence('sequenceId')
  .attr('key', () => faker.lorem.slug(1))
  .attr('uriPath', () => `${faker.lorem.slug(1)}/${faker.lorem.slug(1)}`)
  .attr('labelAllLocales', () => [{ locale: 'en', value: faker.random.word() }])
  .attr('featureToggle', null)
  .attr('menuVisibility', null)
  .attr('permissions', [])
  .attr('dataFences', null)
  .attr('actionRights', null);

export default ApplicationNavbarSubmenu;