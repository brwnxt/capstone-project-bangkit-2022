package com.example.disease.setting

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.provider.Settings
import com.example.disease.Login.LoginActivity
import com.example.disease.R
import com.example.disease.databinding.ActivitySettingBinding
import com.google.firebase.auth.FirebaseAuth
import kotlinx.android.synthetic.main.activity_setting.*

class SettingActivity : AppCompatActivity() {

    private lateinit var binding: ActivitySettingBinding
    lateinit var auth : FirebaseAuth

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySettingBinding.inflate(layoutInflater)
        setContentView(binding.root)

        auth = FirebaseAuth.getInstance()

            tvlogout.setOnClickListener {
            auth.signOut()
            val intent = Intent(this, LoginActivity::class.java).also { intent ->
                intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
                startActivity(intent)
            }
        }

        setupAction()
        aboutaction()
    }
    private fun setupAction() {
        binding.tvbahasa.setOnClickListener {
            startActivity(Intent(Settings.ACTION_LOCALE_SETTINGS))
        }
    }
    private fun aboutaction(){
        binding.tvabout.setOnClickListener {
            startActivity(Intent(this@SettingActivity, AboutActivity::class.java))
        }
    }
}