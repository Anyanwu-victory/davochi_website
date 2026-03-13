import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import { projectType } from './projectType';
import { servicesType } from './servicesType';
import { statsType } from './statsType';
import { teamMemberType } from './teamMemberType';
import { testimonialType } from './testimonialType';
import { contactMemberType } from './contactMemberType';
import { faqType } from './faqType';
import { siteSettingType } from './siteSettingType';



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType,  projectType, statsType, servicesType, testimonialType, contactMemberType, teamMemberType, faqType, siteSettingType ],
}
