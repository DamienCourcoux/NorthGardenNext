import { NextApiRequest, NextApiResponse } from "next";
import Clients from "../models/client";
import nodemailer from 'nodemailer';

type Props = {
    req: NextApiRequest;
    res: NextApiResponse;
}

type Auth = {
    type: string;
    user: string;
    pass: string;
    clientId: string;
    clientSecret: string;
    refreshToken: string;
}

type TransportOptions = {
    service: string;
    auth: Auth;
}

// get: http://localhost:3000/api/clients
export async function getClients({ req, res }: Props) {
    try {
        const clients = await Clients.find({});
        if (!clients) return res.status(404).json({ error: 'Data not found' });
        res.status(200).json(clients);
    } catch (error) {
        res.status(404).json({ error: 'Error while fetching data' });
    }
}

// post: http://localhost:3000/api/clients
export async function postClient({ req, res }: Props) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ error: 'Form data not provided' });
        const client = await Clients.create(formData);
        return res.status(200).json(client);
    } catch (error) {
        return res.status(404).json({ error });
    }
}

// put: http://localhost:3000/api/clients/id
export async function putClient({ req, res }: Props) {
    try {
        const { clientId } = req.query;
        const formData = req.body;
        if (clientId && formData) {
            const client = await Clients.findByIdAndUpdate(clientId, formData);
            return res.status(200).json(client);
        }
        res.status(404).json({ error: 'Client not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while updating the data' });
    }
}

// delete: http://localhost:3000/api/clients/id
export async function deleteClient({ req, res }: Props) {
    try {
        const { clientId } = req.query;
        if (clientId) {
            const client = await Clients.findByIdAndDelete(clientId);
            return res.status(200).json({ deleted: clientId });
        }
        res.status(404).json({ error: 'Client not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while delete the data' });
    }
}

// get: http://localhost:3000/api/clients/id
export async function getClient({ req, res }: Props) {
    try {
        const { clientId } = req.query;
        if (clientId) {
            const client = await Clients.findById(clientId);
            res.status(200).json(client);
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Cannot get the data' });
    }
}

// post: http://localhost:3000/api/clients/sendemail
// export async function sendEmail({ req, res }: Props) {
//     try {
//         const formData = req.body;
//         if (!formData) return res.status(404).json({ error: 'Form data not provided' });
//         const transporter = nodemailer.createTransport({
//             service: process.env.NODEMAILER_SERVICE,
//             auth: {
//                 type: process.env.NODEMAILER_TYPE,
//                 user: process.env.NODEMAILER_USER,
//                 pass: process.env.NODEMAILER_PASSWORD,
//                 clientId: process.env.NODEMAILER_OAUTH_CLIENTID,
//                 clientSecret: process.env.NODEMAILER_OAUTH_CLIENT_SECRET,
//                 refreshToken: process.env.NODEMAILER_OAUTH_REFRESH_TOKEN
//             }
//         });
//         const currentTime = new Date();
//         const year = currentTime.getFullYear();
//         const mailOptions = {
//             from: `North Garden <${formData.email}>`,
//             to: process.env.NODEMAILER_USER,
//             subject: `${formData.desiredService}`,
//             html: `
//                 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//                 <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:arial, 'helvetica neue', helvetica, sans-serif">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta content="width=device-width, initial-scale=1" name="viewport">
//                     <meta name="x-apple-disable-message-reformatting">
//                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                     <meta content="telephone=no" name="format-detection">
//                     <title>📨 Tu as un nouveau message !</title>
//                     <!--[if (mso 16)]>
//                     <style type="text/css">
//                     a {text-decoration: none;}
//                     </style>
//                     <![endif]-->
//                         <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
//                         <!--[if gte mso 9]>
//                     <xml>
//                     <o:OfficeDocumentSettings>
//                     <o:AllowPNG></o:AllowPNG>
//                     <o:PixelsPerInch>96</o:PixelsPerInch>
//                     </o:OfficeDocumentSettings>
//                     </xml>
//                     <![endif]-->
//                     <style type="text/css">
//                         #outlook a {padding: 0;}
//                         .es-button { mso-style-priority: 100 !important; text-decoration: none !important; }
//                         a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
//                         .es-desk-hidden { display: none; float: left;  overflow: hidden; width: 0; max-height: 0; line-height: 0; mso-hide: all; }
//                         [data-ogsb] .es-button { border-width: 0 !important; padding: 10px 20px 10px 20px !important; }
                
//                         @media only screen and (max-width:600px) {
//                             p, ul li, ol li, a { line-height: 150% !important}
//                             h1, h2, h3, h1 a, h2 a, h3 a {line-height: 120%}
//                             h1 { font-size: 30px !important; text-align: left }
//                             h2 { font-size: 24px !important; text-align: left }
//                             h3 { font-size: 20px !important;  text-align: left }
//                             .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size: 30px !important; text-align: left }
//                             .es-header-body h2 a, .es-content-body h2 a,  .es-footer-body h2 a { font-size: 24px !important; text-align: left }
//                             .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size: 20px !important; text-align: left }
//                             .es-menu td a {font-size: 14px !important}
//                             .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a {font-size: 14px !important}
//                             .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a {font-size: 14px !important}
//                             .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a {font-size: 14px !important}
//                             .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a {font-size: 12px !important}
//                             *[class="gmail-fix"] {display: none !important}
//                             .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 {text-align: center !important}
//                             .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align: right !important }
//                             .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align: left !important }
//                             .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display: inline !important }
//                             .es-button-border { display: inline-block !important }
//                             a.es-button, button.es-button { font-size: 18px !important; display: inline-block !important }
//                             .es-adaptive table, .es-left, .es-right { width: 100% !important }
//                             .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width: 100% !important; max-width: 600px !important }
//                             .es-adapt-td { display: block !important; width: 100% !important }
//                             .adapt-img { width: 100% !important; height: auto !important }
//                             .es-m-p0 { padding: 0 !important }
//                             .es-m-p0r { padding-right: 0 !important }
//                             .es-m-p0l { padding-left: 0 !important }
//                             .es-m-p0t { padding-top: 0 !important }
//                             .es-m-p0b { padding-bottom: 0 !important }
//                             .es-m-p20b { padding-bottom: 20px !important }
//                             .es-mobile-hidden, .es-hidden { display: none !important }
//                             tr.es-desk-hidden, td.es-desk-hidden,  table.es-desk-hidden { width: auto !important; overflow: visible !important; float: none !important; max-height: inherit !important; line-height: inherit !important }
//                             tr.es-desk-hidden {  display: table-row !important }
//                             table.es-desk-hidden { display: table !important }
//                             td.es-desk-menu-hidden { display: table-cell !important }
//                             .es-menu td { width: 1% !important }
//                             table.es-table-not-adapt, .esd-block-html table { width: auto !important }
//                             table.es-social { display: inline-block !important }
//                             table.es-social td { display: inline-block !important }
//                             .es-desk-hidden { display: table-row !important; width: auto !important; overflow: visible !important; max-height: inherit !important }
//                             .es-m-p5 { padding: 5px !important }
//                             .es-m-p5t { padding-top: 5px !important }
//                             .es-m-p5b { padding-bottom: 5px !important }
//                             .es-m-p5r { padding-right: 5px !important }
//                             .es-m-p5l { padding-left: 5px !important }
//                             .es-m-p10 { padding: 10px !important }
//                             .es-m-p10t { padding-top: 10px !important }
//                             .es-m-p10b { padding-bottom: 10px !important }
//                             .es-m-p10r { padding-right: 10px !important }
//                             .es-m-p10l { padding-left: 10px !important }
//                             .es-m-p15 { padding: 15px !important }
//                             .es-m-p15t { padding-top: 15px !important }
//                             .es-m-p15b { padding-bottom: 15px !important }
//                             .es-m-p15r { padding-right: 15px !important }
//                             .es-m-p15l { padding-left: 15px !important }
//                             .es-m-p20 { padding: 20px !important }
//                             .es-m-p20t { padding-top: 20px !important }
//                             .es-m-p20r { padding-right: 20px !important }
//                             .es-m-p20l { padding-left: 20px !important }
//                             .es-m-p25 { padding: 25px !important }
//                             .es-m-p25t { padding-top: 25px !important }
//                             .es-m-p25b { padding-bottom: 25px !important }
//                             .es-m-p25r { padding-right: 25px !important }
//                             .es-m-p25l { padding-left: 25px !important }
//                             .es-m-p30 { padding: 30px !important }
//                             .es-m-p30t { padding-top: 30px !important }
//                             .es-m-p30b { padding-bottom: 30px !important }
//                             .es-m-p30r { padding-right: 30px !important }
//                             .es-m-p30l { padding-left: 30px !important }
//                             .es-m-p35 { padding: 35px !important }
//                             .es-m-p35t { padding-top: 35px !important }
//                             .es-m-p35b { padding-bottom: 35px !important }
//                             .es-m-p35r { padding-right: 35px !important }
//                             .es-m-p35l { padding-left: 35px !important }
//                             .es-m-p40 { padding: 40px !important }
//                             .es-m-p40t { padding-top: 40px !important }
//                             .es-m-p40b { padding-bottom: 40px !important }
//                             .es-m-p40r { padding-right: 40px !important }
//                             .es-m-p40l { padding-left: 40px !important }
//                             .h-auto { height: auto !important }
//                             button.es-button { width: 100% }
//                         }
//                     </style>
//                 </head>
                
//                 <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
//                     <div class="es-wrapper-color" style="background-color:#F6F6F6">
//                         <!--[if gte mso 9]>
//                         <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
//                         <v:fill type="tile" color="#f6f6f6"></v:fill>
//                         </v:background>
//                         <![endif]-->
//                         <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
//                             <tr>
//                                 <td valign="top" style="padding:0;Margin:0">
//                                     <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
//                                         <tr>
//                                             <td align="center" style="padding:0;Margin:0">
//                                                 <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
//                                                     <tr>
//                                                         <td align="left" bgcolor="#c0de8f" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;background-color:#c0de8f">
//                                                             <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                                                                 <tr>
//                                                                     <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
//                                                                         <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                                                                             <tr>
//                                                                                 <td align="center" style="padding:0;Margin:0;font-size:0px">
//                                                                                     <img class="adapt-img" src="https://wtgcew.stripocdn.email/content/guids/CABINET_6a24786fc2558c2c31a52b96b6cb6499/images/logo_1.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="250">
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </td>
//                                                                 </tr>
//                                                             </table>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                             </td>
//                                         </tr>
//                                     </table>
//                                     <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
//                                         <tr>
//                                             <td align="center" style="padding:0;Margin:0">
//                                                 <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
//                                                     <tr>
//                                                         <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
//                                                             <!--[if mso]><table dir="rtl" style="width:560px" cellpadding="0" cellspacing="0"><tr><td dir="ltr" style="width:360px"  valign="top"><![endif]-->
//                                                             <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
//                                                                 <tr>
//                                                                     <td align="left" style="padding:0;Margin:0;width:180px">
//                                                                         <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                                                                             <tr>
//                                                                                 <td align="center" style="padding:0;Margin:0;font-size:0px">
//                                                                                     <img class="adapt-img" src="https://wtgcew.stripocdn.email/content/guids/CABINET_6a24786fc2558c2c31a52b96b6cb6499/images/petitbonhommesolo.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="150">
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </td>
//                                                                 </tr>
//                                                             </table>
//                                                             <!--[if mso]></td></tr></table><![endif]-->
//                                                             <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                                                                 <tr>
//                                                                     <td align="left" style="padding:0;Margin:0;width:360px">
//                                                                         <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0;padding-top:10px">
//                                                                                     <h3 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#333333">
//                                                                                         Bonjour patron👋
//                                                                                     </h3>
//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
//                                                                                         <em>📨 Tu as un nouveau message !</em>
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
//                                                                                         Peut-être un nouveau client, en tout cas je l'ai
//                                                                                         enregistré 💾 dans l'administration.
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
//                                                                                         Pense à le supprimé 🗑️, si s'en est pas un !
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </td>
//                                                                 </tr>
//                                                             </table>
//                                                             <!--[if mso]></td><td dir="ltr" style="width:20px"></td><td dir="ltr" style="width:180px" valign="top"><![endif]-->
//                                                         </td>
//                                                     </tr>
//                                                     <tr>
//                                                         <td align="left" style="padding:20px;Margin:0">
//                                                             <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
//                                                             <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
//                                                                 <tr>
//                                                                     <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
//                                                                         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-width:2px;border-style:solid;border-color:transparent" role="presentation">
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#82be20">
//                                                                                         <strong>Nom</strong>
//                                                                                     </h3>
//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
//                                                                                         ${formData.lastname}
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr>
//                                                                     <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
//                                                                         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-width:2px;border-style:solid;border-color:transparent" role="presentation">
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#82be20">
//                                                                                         <strong>Email</strong>
//                                                                                     </h3>
//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
//                                                                                         <a target="_blank" href="mailto:${formData.email}" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#000000;font-size:14px">
//                                                                                             ${formData.email}
//                                                                                         </a>
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr>
//                                                                     <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
//                                                                         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-width:2px;border-style:solid;border-color:transparent" role="presentation">
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#82be20">
//                                                                                         <strong>Ville</strong>
//                                                                                     </h3>
//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
//                                                                                         ${formData.city}
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr>
//                                                                     <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
//                                                                         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-width:2px;border-style:solid;border-color:transparent" role="presentation">
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#82be20">
//                                                                                         <strong>Service désirée</strong>
//                                                                                     </h3>
//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
//                                                                                         ${formData.desiredService}
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </td>
//                                                                 </tr>
//                                                             </table>
//                                                             <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
//                                                             <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
//                                                                 <tr>
//                                                                     <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
//                                                                         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-width:2px;border-style:solid;border-color:transparent" role="presentation">
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#82be20">
//                                                                                         <strong>Prénom</strong>
//                                                                                     </h3>
//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
//                                                                                         ${formData.firstname}
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr>
//                                                                     <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
//                                                                         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-width:2px;border-style:solid;border-color:transparent" role="presentation">
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#82be20">
//                                                                                         <strong>Téléphone</strong>
//                                                                                     </h3>
//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
//                                                                                         <a target="_blank" href="tel:${formData.telephone}" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#000000;font-size:14px">
//                                                                                             ${formData.telephone}
//                                                                                         </a>
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr>
//                                                                     <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
//                                                                         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-width:2px;border-style:solid;border-color:transparent" role="presentation">
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#82be20">
//                                                                                         <strong>Code postal</strong>
//                                                                                     </h3>
//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
//                                                                                         ${formData.zipCode}
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </td>
//                                                                 </tr>
//                                                                 <tr>
//                                                                     <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
//                                                                         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-width:2px;border-style:solid;border-color:transparent" role="presentation">
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <h3 style="Margin:0;line-height:22px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:18px;font-style:normal;font-weight:normal;color:#82be20">
//                                                                                         <strong>Détails</strong>
//                                                                                     </h3>
//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <td align="left" style="padding:0;Margin:0">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
//                                                                                         ${formData.details}
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </td>
//                                                                 </tr>
//                                                             </table>
//                                                             <!--[if mso]></td></tr></table><![endif]-->
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                             </td>
//                                         </tr>
//                                     </table>
//                                     <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
//                                         <tr>
//                                             <td align="center" style="padding:0;Margin:0">
//                                                 <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
//                                                     <tr>
//                                                         <td align="left" bgcolor="#c0de8f" style="padding:20px;Margin:0;background-color:#c0de8f">
//                                                             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                                                                 <tr>
//                                                                     <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
//                                                                         <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                                                                             <tr>
//                                                                                 <td esdev-links-color="#666666" align="left" style="padding:0;Margin:0;padding-bottom:10px">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">
//                                                                                         Évreux et ses alentours
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <td esdev-links-color="#666666" align="left" style="padding:0;Margin:0;padding-bottom:10px;color:#82be20">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">
//                                                                                         Cet e-mail vous a été envoyé par 
//                                                                                         <a target="_blank" href="mailto:north.garden.paysage@gmail.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#000000;font-size:14px">
//                                                                                             north.garden.paysage@gmail.com
//                                                                                         </a>
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                             <tr>
//                                                                                 <td esdev-links-color="#666666" align="left" style="padding:0;Margin:0">
//                                                                                     <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#666666;font-size:14px">
//                                                                                         Copyright © ${year} North Garden, tous droits
//                                                                                         réservés.
//                                                                                     </p>
//                                                                                 </td>
//                                                                             </tr>
//                                                                         </table>
//                                                                     </td>
//                                                                 </tr>
//                                                             </table>
//                                                         </td>
//                                                     </tr>
//                                                 </table>
//                                             </td>
//                                         </tr>
//                                     </table>
//                                 </td>
//                             </tr>
//                         </table>
//                     </div>
//                 </body>
                
//                 </html>
//             `
//         };

//         transporter.sendMail(mailOptions, (err, info) => {
//             if (err) {
//                 res.json(err);
//             } else {
//                 res.json(info);
//             }
//         });
//     } catch (error) {
//         res.status(404).json({ error });
//     }
// }