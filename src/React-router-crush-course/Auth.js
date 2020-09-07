const Auth = {
    isLogIn: false,
    login(cb){
        this.isLogIn = true;
        setTimeout(cb,100)
    },
    logout(cb){
      this.isLogIn=false
      setTimeout(cb,100)
    }
}

export default Auth