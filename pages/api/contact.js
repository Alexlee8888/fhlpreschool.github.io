import { mailOptions, transporter } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
};

const generateEmailContent = (data) => {
    const stringData = Object.entries(data).reduce((str, [key, val]) => {
        return str += '${CONTACT_MESSAGE_FIELDS[key]: \n${val}} \n \n'
    }, "")

    const htmlData = Object.entries(data).reduce((str, [key, val]) => {
        return str += '<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1>'
    }, "")

    return {
        text: stringData,
        html
    }
}

const handler = async (req, res) => {
    if(req.method === 'POST') {
        const data = req.body;
        if(!data.name||!data.email||!data.message) {
            return res.status(400).json({message: "Bad request"});
        }
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "Submission From Contact Us Page On FHL Preschool Website",
                text: "This is a test string",
                html: ""
            });
            return res.status(200).json({success: true})
        } catch (error) {
            console.log(error);
            return res.status(400).json({message: error.message});

        }
    }

    return res.status(400).json({message: "Bad request"});

};

export default handler;