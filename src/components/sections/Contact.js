import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

function ContactForm() {
  // Créer une référence au formulaire pour EmailJS
  const form = useRef();
  const schema = yup
    .object({
      name: yup
        .string()
        .max(50)
        .required('Nom et Prénom sont obligatoires'),
      email: yup
        .string()
        .email('Adresse e-mail invalide')
        .max(255)
        .required('Adresse e-mail est obligatoire'),
      company: yup
        .string()
        .max(100),
      phone: yup
        .string()
        .matches(/^[0-9+\s()-]*$/, 'Numéro de téléphone invalide'),
      message: yup
        .string()
        .required('Message est obligatoire'),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Récupération des variables d'environnement
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const onSubmit = (data) => {
    // Envoi du formulaire via EmailJS
    emailjs.sendForm(
      serviceId, 
      templateId, 
      form.current, 
      publicKey
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      alert('Message envoyé avec succès !');
      reset();
    }, (error) => {
      console.log('FAILED...', error);
      console.log('Erreur détaillée:', error.text);
      alert('Une erreur est survenue, veuillez réessayer. Voir la console pour plus de détails.');
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        <form ref={form} className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-header">
            <h3>Envoyez-moi un message</h3>
          </div>
          
          <div className="input-group">
            <label>Nom et Prénom *</label>
            <input
              type="text"
              name="name"
              placeholder="Votre nom et prénom"
              {...register('name')}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>
          
          <div className="input-group">
            <label>Adresse e-mail *</label>
            <input
              type="email"
              name="email"
              placeholder="exemple@email.com"
              {...register('email')}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>
          
          <div className="input-group">
            <label>Entreprise</label>
            <input
              type="text"
              name="company"
              placeholder="Votre entreprise (optionnel)"
              {...register('company')}
            />
          </div>
          
          <div className="input-group">
            <label>Numéro de téléphone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+33 6 12 34 56 78"
              {...register('phone')}
            />
            {errors.phone && <span className="error">{errors.phone.message}</span>}
          </div>
          
          <div className="message-group">
            <label>Message *</label>
            <textarea
              name="message"
              placeholder="Saisissez votre message ici..."
              {...register('message')}
            ></textarea>
            {errors.message && <span className="error">{errors.message.message}</span>}
          </div>
          
          <div className="button-group">
            <button type="submit">Envoyer</button>
            {/* Champ caché pour l'email du destinataire */}
            <input type="hidden" name="to_email" value="samy.bdm16@gmail.com" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
