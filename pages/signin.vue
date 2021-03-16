<template>
  <div
    class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <app-icon size="lg" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {{ $t("login.action") }}
        </h2>
        <div class="text-center">
          <nuxt-link
            to="/signup"
            class="font-medium text-2xl text-indigo-600 hover:text-indigo-500"
          >
            {{ $t("login.to_create_account") }}
          </nuxt-link>
        </div>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              id="email-address"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full p-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md text-md"
              :placeholder="emailPlaceholder"
            />
          </div>
          <div>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full p-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md text-md"
              :placeholder="passwordPlaceholder"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-2xl font-medium rounded-md text-white bg-green-700 hover:bg-green-800"
            @click.prevent="signInUser"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-green-500 group-hover:text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            {{ $t("login.action") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import appIcon from "@/components/appIcon";

export default {
  components: {
    appIcon,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    emailPlaceholder() {
      return this.$t("placeholder.email");
    },
    passwordPlaceholder() {
      return this.$t("placeholder.password");
    },
  },
  methods: {
    async signInUser() {
      await this.$store.dispatch("signInUser", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
