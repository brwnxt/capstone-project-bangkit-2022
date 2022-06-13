package com.example.disease.deskripsi

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.example.disease.R
import kotlinx.android.synthetic.main.activity_detail_desc.*

class DetailDescActivity : AppCompatActivity() {

    private var newtitle: String = "Detail Penyakit"
    companion object{
        var EXTRA_DATA = "0"
    }

    @SuppressLint("StringFormatInvalid")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detail_desc)

        supportActionBar?.apply {
            title = newtitle
        }

        val list = intent.getParcelableExtra<DataDesc>(EXTRA_DATA)

        detail_namapenyakit.text = getString(R.string.namapenyakit, list!!.namapenyakit )
        iv_detailgambar.setImageResource(list!!.gambar!!)
        detail_descpenyakit.text = getString(R.string.descpenyakit, list.descpenyakit)
        detail_obat.text = getString(R.string.obat, list.obat)
    }
}

