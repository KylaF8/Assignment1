import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true },
});

UserSchema.methods.comparePassword = async function (passw) { 
  return await bcrypt.compare(passw, this.password); 
}

UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username: username });
};

const passwordValidator = (password) => {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/; 
  
  const consecutiveSequence = /(.)\1\1/;

  const isStrongPassword = strongPasswordRegex.test(password);
  const hasConsecutiveSequence = consecutiveSequence.test(password);

  return isStrongPassword && !hasConsecutiveSequence;
}

const usernameRegex = /^[A-Za-z0-9]{2,17}$/;

UserSchema.path('username').validate(function (username) {
  return usernameRegex.test(username);
});

  UserSchema.path("password").validate(passwordValidator);

  UserSchema.pre('save', async function(next) {
    const saltRounds = 10; 
   
    if (this.isModified('password') || this.isNew) {
      try {
        const hash = await bcrypt.hash(this.password, saltRounds);
        this.password = hash;
        next();
    } catch (error) {
       next(error);
    }
  
    } else {
        next();
    }
  });
  

  export default mongoose.model('User', UserSchema);

