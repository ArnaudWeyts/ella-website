import React from 'react';

function Contact() {
  return (
    <div className="Contact">
      <div className="Contact__info">
        <h2>Contact us</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut eius quia
          itaque porro, quod voluptatum pariatur soluta velit natus quaerat
          illum sequi mollitia maxime ad consequatur quam neque facere earum?
        </p>
      </div>
      <form className="Contact__form">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <textarea name="text" cols="30" rows="10" />
      </form>
    </div>
  );
}

export default Contact;
