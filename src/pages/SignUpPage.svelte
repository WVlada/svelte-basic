<script>
    let disabled = true;
    let password, passwordRepeat;
    //const onChangePassword = (event) => {
    //    password = event.target.value
    //    //refreshDisabled()
    //}
    //const onChangePasswordRepeat = (event) => {
    //    passwordRepeat = event.target.value
    //    //refreshDisabled()
    //}
    //const refreshDisabled = ()=>{
    //    disabled = password != passwordRepeat
    //    //if(password === passwordRepeat){
    //    //    disabled = false
    //    //}else{
    //    //    disabled = true
    //    //}
    //}
    // svelte reactive stuff
    $: disabled = (password && passwordRepeat) ?  password != passwordRepeat : true
</script>

<h1>Sign Up</h1>
<label for="username">Username</label>
<input id="username" placeholder="username" />
<label for="email">Email</label>
<input id="email" placeholder="email"/>
<label for="password">Password</label>
<input id="password" type="password" placeholder="password" bind:value={password} />
<label for="password-repeat">Password repeat</label>
<input id="password-repeat" type="password" placeholder="password" bind:value={passwordRepeat} />
<button {disabled}>Sign Up</button>