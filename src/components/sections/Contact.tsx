import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

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
      .max(100)
      .default(''),
    phone: yup
      .string()
      .matches(/^[0-9+\s()-]*$/, 'Numéro de téléphone invalide')
      .default(''),
    message: yup
      .string()
      .required('Message est obligatoire'),
  })
  .required();

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isVisible, domRef } = useIntersectionObserver({ threshold: 0.2 });

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

  const onSubmit = async (): Promise<void> => {
    if (!form.current || !serviceId || !templateId || !publicKey) {
      toast.error('Configuration EmailJS manquante. Veuillez vérifier vos variables d\'environnement.');
      return;
    }

    setIsSubmitting(true);

    const emailPromise = emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    );

    toast.promise(emailPromise, {
      loading: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      error: 'Une erreur est survenue, veuillez réessayer.',
    })
      .then(() => {
        reset();
      })
      .catch((error) => {
        console.log('Erreur détaillée EmailJS:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div
        ref={domRef}
        className={`section-container slide-up-section ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-title">Contact</h2>
        <form ref={form} className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-header">
            <h3>Envoyez-moi un message</h3>
          </div>

          <div className="input-group">
            <label>Nom et Prénom *</label>
            <input
              type="text"
              placeholder="Votre nom et prénom"
              {...register('name')}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>

          <div className="input-group">
            <label>Adresse e-mail *</label>
            <input
              type="email"
              placeholder="exemple@email.com"
              {...register('email')}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          <div className="input-group">
            <label>Entreprise</label>
            <input
              type="text"
              placeholder="Votre entreprise (optionnel)"
              {...register('company')}
            />
          </div>

          <div className="input-group">
            <label>Numéro de téléphone</label>
            <input
              type="tel"
              placeholder="+33 6 12 34 56 78"
              {...register('phone')}
            />
            {errors.phone && <span className="error">{errors.phone.message}</span>}
          </div>

          <div className="message-group">
            <label>Message *</label>
            <textarea
              placeholder="Saisissez votre message ici..."
              {...register('message')}
            ></textarea>
            {errors.message && <span className="error">{errors.message.message}</span>}
          </div>

          <div className="button-group">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Envoi...
                </>
              ) : (
                'Envoyer'
              )}
            </button>
            <input type="hidden" name="to_email" value="samy.bdm16@gmail.com" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
