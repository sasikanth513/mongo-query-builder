export default [
  {
    id: 'find',
    link: 'query-documents',
    desc: 'Find',
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
        label: 'I want to filter on field type',
        children: [
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
    ]
  },
]