export default [
  {
    id: 'find',
    link: 'query-documents',
    desc: 'Find',
    method: 'find',
    query: '{}',
    children: [
      {
        id: 'all',
        link: 'query-documents/#select-all-documents-in-a-collection',
        desc: 'All documents',
        command: `db.orders.find({})`,
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
                    command: `db.orders.find( { 'item.quantity': 1 } ))`,
                  },
                  {
                    id: 'filter.number.gt',
                    desc: 'Greater than',
                    command: `db.orders.find( { 'item.quantity': { $gt: 0 } } )`,
                  },
                  {
                    id: 'filter.number.gte',
                    desc: 'Greater than or equals to',
                    command: `db.orders.find( { 'item.quantity': { $gte: 1 } } )`,
                  },
                  {
                    id: 'filter.number.lt',
                    desc: 'Less than',
                    command: `db.orders.find( { 'item.quantity': { $lt: 2 } } )`,
                  },
                  {
                    id: 'filter.number.lte',
                    desc: 'Less than or equals to',
                    command: `db.orders.find( { 'item.quantity': { $lte: 1 } } )`,
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
                    command: `db.orders.find( { status: "shipped" } ))`,
                  },
                  {
                    id: 'filter.string.array',
                    link: 'query-documents/#specify-equality-condition',
                    desc: 'From array of strings',
                    command: `db.orders.find( { status: { $in: [ "shipped", "delivered" ] } } )`,
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
                    command: `db.orders.find( { status: "shipped" } ))`,
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
                    command: `db.orders.find( { 'status': "shipped" } ))`,
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
                    command: `db.orders.find( { 'status': "shipped" } ))`,
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
                command: `db.orders.find({ status: 'shipped', 'item.name': 'Mongo Query Builder' }) \n\n OR \n\n db.orders.find({ $and: [ { status: 'shipped' }, {'item.name': 'Mongo Query Builder' } ] })`,
              },
              {
                id: 'multiple.filter.or',
                desc: 'With OR condition',
                command: `db.orders.find({ $or: [ { status: 'delivered' }, {'item.name': 'Mongo Query Builder' } ] })`,
              },
              {
                id: 'multiple.filter.both',
                desc: 'With both AND & OR condition',
                command: `db.orders.find({ $and: [ { $or: [ { status: 'shipped'}, { status: 'delivered'  } ] }, {'item.name': 'Mongo Query Builder' } ] })`,
              }
            ]
          }
        ]
      },
    ]
  },
]