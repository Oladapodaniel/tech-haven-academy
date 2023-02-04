<script>
export default {
    data() {
        return {
            courses: [
                {
                    name: 'Foundation course to understand Business analysis',
                    category: 'Business analysis',
                    author: 'William Carnahan, Business School',
                    thumbnail: require('../static/images/business-analysis.png'),
                    price: '5,000',
                    duration: '5hrs',
                    id: 1
                },
                {
                    name: 'Growing a Successful Career as a Project Manager',
                    category: 'Project management',
                    author: 'Lee jones, Msc.',
                    thumbnail: require('../static/images/project_man_logo.png'),
                    price: '8,000',
                    duration: '33hrs',
                    id: 2
                },
                {
                    name: 'The Complete Quality Assurance Course',
                    category: 'Quality Assurance',
                    author: 'Victor Gorinov',
                    thumbnail: require('../static/images/quality_assurance.png'),
                    price: '4,000',
                    duration: '4hrs',
                    id: 3
                },
                {
                    name: 'ServiceNow Certified Administration For Beginners',
                    category: 'ServiceNow',
                    author: 'Syed Raza, Clay Desk.',
                    thumbnail: require('../static/images/service_now.png'),
                    price: '9,500',
                    duration: '6hrs',
                    id: 4
                },
            ]
        }
    }
}
</script>