import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {projectType} from './projectType'
import {projectFeatureType} from './projectFeatureType'
import {propertyTypeType} from './propertyTypeType'
import {projectSightType} from './projectSightType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, projectType, projectFeatureType, propertyTypeType, projectSightType],
}
