export default {
  type: 'object',
  name: 'calendly',
  title: 'Calendly',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL to Calendly page',
    },
    {
      name: 'calendlyPresentation',
      type: 'string',
      title: 'Calendly presentation',
      options: {
        list: [
          { title: 'Inline Widget', value: 'InlineWidget' },
          { title: 'Popup Widget', value: 'PopupWidget' },
          { title: 'Popup Text', value: 'PopupText' },
          { title: 'Custom Button', value: 'CustomButton' },
          { title: 'Calendly Event Listener', value: 'CalendlyEventListener' },
        ],
      },
    },
    {
      name: 'popupText',
      type: 'string',
      title: 'Popup Text title',
    },
  ],
}
