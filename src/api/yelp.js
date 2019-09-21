import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer VGdyGUtHYtAnHI52NFQsX5IAcO3ihwwjlRxElGnQ9fRekM37jRzDM43JfZtdLhww7AlgY0RFkrInLmWP2lwrPhjkAODXtvJClU6xRNh9J5dmFvK38P4AoPDeQOBiXXYx'
    }
});