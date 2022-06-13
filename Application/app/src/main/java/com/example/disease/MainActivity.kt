package com.example.disease

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ImageButton
import com.example.disease.Login.LoginActivity
import com.example.disease.databinding.ActivityMainBinding
import com.example.disease.deskripsi.DescActivity
import com.example.disease.panduan.PanduanActivity
import com.example.disease.setting.SettingActivity
import com.example.disease.ui.kamera.UploadActivity
import com.google.firebase.auth.FirebaseAuth
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity(), View.OnClickListener {

    private lateinit var binding: ActivityMainBinding
    private lateinit var ibcamera : ImageButton
    private lateinit var ibdesc : ImageButton
    private lateinit var ibsetting : ImageButton
    lateinit var auth : FirebaseAuth

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        supportActionBar?.hide()

        auth = FirebaseAuth.getInstance()

//        ibpengaturan.setOnClickListener {
//            auth.signOut()
//            val intent = Intent(this, LoginActivity::class.java).also { intent ->
//                intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
//                startActivity(intent)
//            }
//        }

        ibcamera = findViewById(R.id.ibkamera)
        ibdesc = findViewById(R.id.ibdeskripsi)
        ibsetting = findViewById(R.id.ibpengaturan)

        ibcamera.setOnClickListener(this)
        ibdesc.setOnClickListener(this)
        ibpanduan.setOnClickListener(this)
        ibpengaturan.setOnClickListener(this)
    }

    override fun onClick(v: View) {
        when(v.id){
            R.id.ibkamera -> {
                val intent = Intent(this@MainActivity, UploadActivity::class.java)
                startActivity(intent)
            }
            R.id.ibdeskripsi -> {
                val intent = Intent(this@MainActivity, DescActivity::class.java)
                startActivity(intent)
            }
            R.id.ibpanduan -> {
                val intent = Intent(this@MainActivity, PanduanActivity::class.java)
                startActivity(intent)
            }
            R.id.ibpengaturan -> {
                val intent = Intent(this@MainActivity, SettingActivity::class.java)
                startActivity(intent)
            }
        }
    }
}