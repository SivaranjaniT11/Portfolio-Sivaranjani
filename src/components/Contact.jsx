import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import styles from './Contact.module.scss';

function validate(form) {
  const errs = {};
  if (!form.name.trim()) errs.name = 'Name is required';
  if (!form.email.trim()) errs.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
  if (!form.subject.trim()) errs.subject = 'Subject is required';
  if (!form.message.trim()) errs.message = 'Message is required';
  else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters';
  return errs;
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  useEffect(() => {
    if (!sent) return undefined;
    const timer = setTimeout(() => setSent(false), 2000);
    return () => clearTimeout(timer);
  }, [sent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const endpoint = personalInfo.sheetEndpoint || '';
    const isWebApp = endpoint.includes('script.google.com') && endpoint.includes('/exec');
    if (!isWebApp) {
      setErrors({
        form: 'The spreadsheet link only opens the sheet. Deploy scripts/ContactSheet.gs as a web app and paste the /exec URL into sheetEndpoint.',
      });
      return;
    }

    setLoading(true);
    try {
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          sentAt: new Date().toISOString(),
        }),
      });
      setForm({ name: '', email: '', subject: '', message: '' });
      setSent(true);
    } catch {
      setErrors({ form: 'Could not save the message. Please use email or LinkedIn.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>
            <div className={styles.line} />
            Get In Touch
            <div className={styles.line} />
          </div>
          <h2 className="section-title">Let&apos;s <span className="gradient-text">Work Together</span></h2>
          <p className="section-subtitle">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s build something great.
          </p>
        </motion.div>

        <div className="row g-4">
          <div className="col-lg-6 d-flex">
            <motion.div
              className="w-100 h-100"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Other ways to reach me</h3>
                <p className={styles.infoDesc}>
                  Email and LinkedIn work now. The form saves a row only after the Apps Script web app is connected.
                </p>
                <div className={styles.contactItems}>
                  {/* {personalInfo.spreadsheetUrl && (
                    <a href={personalInfo.spreadsheetUrl} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                      <div className={styles.contactIcon}><i className="bi bi-table" /></div>
                      <div className={styles.contactText}>
                        <div className={styles.contactLabel}>Messages</div>
                        <div className={styles.contactValue}>Open spreadsheet</div>
                      </div>
                    </a>
                  )} */}
                  <a href={`mailto:${personalInfo.email}`} className={styles.contactItem}>
                    <div className={styles.contactIcon}><i className="bi bi-envelope-fill" /></div>
                    <div className={styles.contactText}>
                      <div className={styles.contactLabel}>Email</div>
                      <div className={styles.contactValue}>{personalInfo.email}</div>
                    </div>
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                    <div className={styles.contactIcon}><i className="bi bi-linkedin" /></div>
                    <div className={styles.contactText}>
                      <div className={styles.contactLabel}>LinkedIn</div>
                      <div className={styles.contactValue}>Sivaranjani Thiyagarajan</div>
                    </div>
                  </a>
                  {/* <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                    <div className={styles.contactIcon}><i className="bi bi-github" /></div>
                    <div className={styles.contactText}>
                      <div className={styles.contactLabel}>GitHub</div>
                      <div className={styles.contactValue}>SivaranjaniT11</div>
                    </div>
                  </a> */}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6 d-flex">
            <motion.div
              className="w-100 h-100"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Send a Message</h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`${styles.formInput} ${errors.name ? styles.error : ''}`}
                        />
                        {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
                        />
                        {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                      </div>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration..."
                      className={`${styles.formInput} ${errors.subject ? styles.error : ''}`}
                    />
                    {errors.subject && <span className={styles.errorMsg}>{errors.subject}</span>}
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className={`${styles.formInput} ${styles.formTextarea} ${errors.message ? styles.error : ''}`}
                      rows={5}
                    />
                    {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                  </div>
                  {errors.form && <span className={styles.errorMsg}>{errors.form}</span>}
                  <motion.button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={loading}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="bi bi-send-fill" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {sent && (
        <div className={styles.popup} role="status">
          <div className={styles.popupCard}>
            <i className="bi bi-check-circle-fill" />
            <p>Message sent successfully</p>
           {/* {personalInfo.spreadsheetUrl && (
              <a href={personalInfo.spreadsheetUrl} target="_blank" rel="noopener noreferrer">
                Open spreadsheeCurrently @ Taizo.in  · 3 years 5 montht
              </a>
            )}*/}
          </div>
        </div>
      )}
    </section>
  );
}
