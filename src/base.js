export default [
  {
    id: 'find',
    link: 'query-documents',
    desc: 'Find',
    method: 'find',
    children: [
      {
        id: 'all',
        link: 'query-documents/#select-all-documents-in-a-collection',
        desc: 'All documents',
        query: '{}',
      },
      {
        id: 'filter',
        desc: 'Some documents',
        label: 'I want to filter on',
        children: [
          {
            id: 'single.filter',
            desc: 'Single field',
            label: 'And the field type is',
            children: [
              {
                id: 'filter.number',
                desc: 'Number',
                children: [
                  {
                    id: 'filter.number.eq',
                    desc: 'Equals to',
                    query: '{ "item.quantity": 1 }',
                  },
                  {
                    id: 'filter.number.gt',
                    desc: 'Greater than',
                    query: '{ "item.quantity": { $gt: 0 } }',
                  },
                  {
                    id: 'filter.number.gte',
                    desc: 'Greater than or equals to',
                    query: '{ "item.quantity": { $gte: 1 } } )',
                  },
                  {
                    id: 'filter.number.lt',
                    desc: 'Less than',
                    query: '{ "item.quantity": { $lt: 2 } }',
                  },
                  {
                    id: 'filter.number.lte',
                    desc: 'Less than or equals to',
                    query: '{ "item.quantity": { $lte: 1 } }',
                  },
                ]
              },
              {
                id: 'filter.string',
                desc: 'String',
                children: [
                  {
                    id: 'filter.string.complete',
                    link: 'query-documents/#specify-equality-condition',
                    desc: 'Complete string',
                    query: '{ status: "shipped" }',
                  },
                  {
                    id: 'filter.string.array',
                    link: 'query-documents/#specify-equality-condition',
                    desc: 'From array of strings',
                    query: '{ status: { $in: [ "shipped", "delivered" ] } }',
                  },
                ]
              },
              {
                id: 'filter.array',
                desc: 'Plain Array',
                children: [
                  {
                    id: 'filter.array.contains',
                    link: 'query-documents/#specify-equality-condition',
                    desc: 'Contains',
                    query: '{ status: "shipped" }',
                  },
                ]
              },
              {
                id: 'filter.array.objects',
                desc: 'Array of Objects',
                children: [
                  {
                    id: 'filter.array.objects.string',
                    link: 'query-documents/#specify-equality-condition',
                    desc: 'String',
                    query: '{ status: "shipped" }',
                  },
                ]
              },
              {
                id: 'filter.nested.object',
                desc: 'Nested Object',
                children: [
                  {
                    id: 'filter.array.objects.string',
                    link: 'query-documents/#specify-equality-condition',
                    desc: 'String',
                    query: '{ status: "shipped" }',
                  },
                ]
              },
            ]
          },
          {
            id: 'multiple.filter',
            desc: 'Multiple fields',
            children: [
              {
                id: 'multiple.filter.and',
                desc: 'With AND condition',
                query: '{ $and: [ { status: "shipped" }, {"item.name": "Mongo Query Builder" } ] }',
              },
              {
                id: 'multiple.filter.or',
                desc: 'With OR condition',
                query: '{ $or: [ { status: "delivered" }, {"item.name": "Mongo Query Builder" } ] }',
              },
              {
                id: 'multiple.filter.both',
                desc: 'With both AND & OR condition',
                query: '{ $and: [ { $or: [ { status: "shipped"}, { status: "delivered"  } ] }, {"item.name": "Mongo Query Builder" } ] }',
              }
            ]
          }
        ]
      },
    ]
  },
]