package com.example.disease.deskripsi

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.disease.R
import com.example.disease.databinding.ActivityDescBinding

class DescActivity : AppCompatActivity() {

    private var title : String = "Deskripsi"
    private lateinit var binding: ActivityDescBinding
    private lateinit var user : ArrayList<DataDesc>

    private lateinit var rvdeskripsi: RecyclerView
    private val list = ArrayList<DataDesc>()


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityDescBinding.inflate(layoutInflater)
        setContentView(binding.root)

        supportActionBar?.title = title

        binding.rvDeskripsi.setHasFixedSize(true)

        list.apply {
            clear()
            list.addAll(listPenyakit)
        }

        showRecylerList()
    }
    private fun showSelectedUser(user: DataDesc) {
        Toast.makeText(this, "Kamu memilih " + user.namapenyakit, Toast.LENGTH_SHORT).show()
    }
    private val listPenyakit: ArrayList<DataDesc>
    @SuppressLint("Recyle")
    get() {
        val dataNamaPenyakit = resources.getStringArray(R.array.data_namapenyakit)
        val dataAvatar = resources.obtainTypedArray(R.array.data_avatar)
        val dataDescPenyakit = resources.getStringArray(R.array.data_descpenyakit)
        val dataObat = resources.getStringArray(R.array.data_obat)
        val Listdesc = ArrayList<DataDesc>()
        for (i in dataNamaPenyakit.indices){
            val desc = DataDesc (
                dataNamaPenyakit[i],
                dataAvatar.getResourceId(i, 1),
                dataDescPenyakit[i],
                dataObat[i]
            )
            Listdesc.add(desc)
        }
        return Listdesc
    }
    private fun showRecylerList() {
        binding.rvDeskripsi.layoutManager = LinearLayoutManager(this)
        val listUserAdapter = ListDescAdapter(list)
        binding.rvDeskripsi.adapter = listUserAdapter

    }

}