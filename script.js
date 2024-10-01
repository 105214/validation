
$("#register-form").validate({

    rules: {
      name: {
        required: true,
        minlength: 3,
        maxlength: 50
      },
      email: {
        required: true,
      },
      phone:{
        required:true,
        minlength:10,
        maxlength:14
      },
      age:{
        required:true,
        minlength:2,
        maxlength:20
      },
      gender:{
        required:true,
        minlength:3,
        maxlength:15
      },
      address:{
        maxlength:50,
      }

    },
  
    messages: {
      name: {
        required: "Name is required",
        minlength: "Username should have at least 3 characters hi",
        maxlength: "Username should not exceed 50 characters hi"
      },
      email: {
        required: "valid email is required",
      },
      phone:{
        required:"enter valid phone number",
        minlength:"number should have 10 digit",
        maxlength:"number should not exceed 14 digit"
      },
      age:{
        required:"enter your age",
        minlength:"enter your correct age",
        maxlength:"age should not exceed 20 digit"
      },
      gender:{
        required:"enter your gender",
        minlength:"gender should have 3 characters",
        maxlength:"gender should not exceed 15 characters"
      },
      address:{
        maxlength:"address should not exceed 50 characters"
      }

    },
  
    submitHandler: function(form) {
      form.submit();  // Submits the form if validation passes
    }
  });
  