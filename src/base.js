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
                  {
                    id: 'filter.number.all',
                    desc: 'Both greater than and less than',
                    query: '{ "item.quantity": { $gt: 0, $lt: 10 } } )',
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
                link: 'query-arrays/',
                children: [
                  {
                    id: 'filter.array.single',
                    link: 'query-arrays/#query-an-array-for-an-element',
                    desc: 'Single value',
                    query: '{ colors: "red" }',
                  },
                  {
                    id: 'filter.array.multiple',
                    link: 'query-arrays/#match-an-array',
                    desc: 'Multiple values',
                    query: '{ colors: { $all: ["red", "blue"] } }',
                    note: 'This will match an array which has both values in any order.'
                  },
                  {
                    id: 'filter.array.complete',
                    link: 'query-arrays/#match-an-array',
                    desc: 'Complete array',
                    query: '{ colors: [ "blue", "red", "green" ] }',
                    note: 'This will only match an array with the exact elemenents in the specified order.'
                  },
                  {
                    id: 'filter.array.index',
                    link: 'query-arrays/#query-for-an-element-by-the-array-index-position',
                    desc: 'By index',
                    query: '{ "colors.1": "red" }',
                  },
                  {
                    id: 'filter.array.length',
                    link: 'query-arrays/#query-an-array-by-array-length',
                    desc: 'By array size / length',
                    query: '{ colors: { $size: 3 } }',
                  },
                ]
              },
              {
                id: 'filter.array.objects',
                desc: 'Array of Objects',
                link: 'query-array-of-documents/',
                children: [
                  {
                    id: 'filter.array.objects.single',
                    link: 'query-array-of-documents/#use-the-array-index-to-query-for-a-field-in-the-embedded-document',
                    desc: 'Single field',
                    query: '{ "history.status": "delivered" }',
                  },
                  {
                    id: 'filter.array.objects.multiple',
                    link: 'query-array-of-documents/#specify-multiple-conditions-for-array-of-documents',
                    desc: 'Multiple fields',
                    query: '{ history: { $elemMatch:{ status: "shipped", warehouse: "2"  } } }',
                  },
                  {
                    id: 'filter.array.objects.index',
                    link: 'query-array-of-documents/#use-the-array-index-to-query-for-a-field-in-the-embedded-document',
                    desc: 'By index',
                    query: '{ "history.1.status": "shipped" }',
                  },
                  {
                    id: 'filter.array.objects.length',
                    link: 'query-arrays/#query-an-array-by-array-length',
                    desc: 'By array size / length',
                    query: '{ history: { $size: 3 } }',
                  },
                ]
              },
              {
                id: 'filter.nested.object',
                desc: 'Nested Object',
                label: 'I want to match',
                children: [
                  {
                    id: 'filter.nested.object.single',
                    link: 'query-embedded-documents/#query-on-nested-field',
                    desc: 'Single field',
                    query: '{ "item.name": "Mongo Query Builder" }',
                  },
                  {
                    id: 'filter.nested.object.multiple',
                    link: 'query-embedded-documents/#specify-and-condition',
                    desc: 'Multiple fields',
                    query: [
                      '{ "item.name": "Mongo Query Builder", "item.quantity": 1 }',
                      '{ item: { $elemMatch: { name: "Mongo Query Builder", quantity: 1 } } }'
                    ],
                  },
                  {
                    id: 'filter.nested.object.complete',
                    link: 'query-embedded-documents/#match-an-embedded-nested-document',
                    desc: 'Complete object',
                    query: '{ "item.author": { name: "Sasikanth Dronavalli", twitter: "https://twitter.com/sasi513" } }',
                    note: 'This will only match complete object with the exact order of the keys.'
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