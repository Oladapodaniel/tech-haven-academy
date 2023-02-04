export default function (context) {
    console.log(context)
    if (context.route.fullPath = '/') {
        context.redirect('/courses')
    }
}