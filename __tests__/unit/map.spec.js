import * as map from '../../src/map.js'
import * as arcGISMap from '@arcgis/core/Map.js'

// jest.mock('@arcgis/core/Map')

describe('src/map', () => {
    test('should initialize a new map', async () => {
        const container = document.createElement('div')
        await map.initializeMap(container)
    });
})