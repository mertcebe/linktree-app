'use server';

export default async function grabUsername(formData) {
    console.log(formData.get('username'));
    const username = formData.get('username');
    // mongoose.connect(process.env.MONGO_URI);
    // const existingPageDoc = await Page.findOne({ uri: username });
    // if (existingPageDoc) {
    //     return false;
    // } else {
    //     const session = await getServerSession(authOptions);
    //     return await Page.create({
    //         uri: username,
    //         owner: session?.user?.email,
    //     });
    // }
}