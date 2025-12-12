class RegisterUser {
  constructor(validator, repo, emailer) {
    this.validator = validator;
    this.repo = repo;
    this.emailer = emailer;
  }

  register(user) {
    this.validator.validate(user);
    this.repo.save(user);
    this.emailer.sendEmail(user);
  }
}

class CreateUser {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserValidator {
  validate(user) {
    if (!user.name) {
      throw new Error("Name is required");
    }
    if (!user.email) {
      throw new Error("Email is required");
    }
  }
}

class UserRepo {
  save(user) {
    console.log("User saved to repo:", user.name);
  }
}

class EmailService {
  sendEmail(user) {
    console.log("Sending email to:", user.email);
  }
}

const user = new CreateUser("Arif", "arif@email.com");

const registerUser = new RegisterUser(
  new UserValidator(),
  new UserRepo(),
  new EmailService()
);

registerUser.register(user);
