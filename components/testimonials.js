app.component("testimonials-section", {
  /*html*/
  template: `
    <div class="testimonials-container">
      <ul>
        <li v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-card">
            <p>{{testimonial.text}}</p>
            <h3>{{testimonial.name}}</h3>
          </div>
        </li>
      </ul>
    </div>
    `,
  props: {
    testimonials: {
      type: Array,
      required: true,
    },
  },
});
